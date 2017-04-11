package tk.spop.pianoroll.service.impl;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.val;
import tk.spop.pianoroll.model.musicxml.ScorePartwise;
import tk.spop.pianoroll.model.roll.Channel;
import tk.spop.pianoroll.model.roll.Song;
import tk.spop.pianoroll.service.ModelService;

@Service
@RequiredArgsConstructor
public class ModelServiceImpl implements ModelService {

	private final XmlMapper mapper;

	@Override
	@SneakyThrows
	public ScorePartwise readMusicXml(String xml) {
		return mapper.readValue(xml, ScorePartwise.class);
	}

	@Override
	public Song transform(ScorePartwise score) {
		val s = new Song();
		
//		score.getPart().stream().flatMap(mapper)

		val cs = s.getChannels().stream();
		s.setMaxNote(cs.mapToInt(Channel::getMaxNote).max().getAsInt());
		s.setMinNote(cs.mapToInt(Channel::getMinNote).min().getAsInt());
		return s;
	}

}
