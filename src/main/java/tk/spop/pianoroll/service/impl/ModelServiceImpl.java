package tk.spop.pianoroll.service.impl;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.val;
import tk.spop.pianoroll.model.musicxml.MxNote;
import tk.spop.pianoroll.model.musicxml.MxPart;
import tk.spop.pianoroll.model.musicxml.MxPitch;
import tk.spop.pianoroll.model.musicxml.MxScorePartwise;
import tk.spop.pianoroll.model.roll.Channel;
import tk.spop.pianoroll.model.roll.Note;
import tk.spop.pianoroll.model.roll.Song;
import tk.spop.pianoroll.service.ModelService;

//@Service
@RequiredArgsConstructor
public class ModelServiceImpl implements ModelService {

	public static final int TICKS_PER_QUARTER = 16;
	public static final List<String> NOTES = //
			Arrays.asList("C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B");

	private final XmlMapper mapper;

	@Override
	@SneakyThrows
	public MxScorePartwise readMusicXml(String xml) {
		return mapper.readValue(xml, MxScorePartwise.class);
	}

	@Override
	public Song transform(MxScorePartwise score) {
		val song = new Song();
		val part = score.getPart().get(0);

		for (int staff = 0; staff < getStaves(part); staff++) {
			val channel = new Channel();
			song.getChannels().add(channel);

			int currentTime = 0;
			part.getMeasure().forEach(m -> {
				val notes = m.getNote().stream().filter(n -> n.getStaff() == staff);
				addNotes(notes, channel, currentTime);
				currentTime += 4 * TICKS_PER_QUARTER; // TODO: get time
			});

		}

		val cs = song.getChannels().stream();
		song.setMaxNote(cs.mapToInt(Channel::getMaxNote).max().getAsInt());
		song.setMinNote(cs.mapToInt(Channel::getMinNote).min().getAsInt());
		return song;
	}

	protected int getStaves(MxPart part) {
		return part.getMeasure().get(0).getAttributes().getStaves();
	}

	protected void addNotes(Stream<MxNote> notes, Channel channel, int currentTime) {
		notes.flatMap(n -> {

			val start = currentTime;
			val duration = n.getDuration() * TICKS_PER_QUARTER;
			currentTime += duration;

			if (n.getPitch() == null) {
				return Stream.empty();
			}

			return Stream.of(new Note() //
					.setStart(start) //
					.setDuration(duration) //
					.setCode(getCode(n.getPitch())));

		}).forEach(n -> channel.getNotes().add(n));
	}

	protected int getCode(MxPitch p) {
		return p.getOctave() * 12 + NOTES.indexOf(p.getStep());
	}

}
