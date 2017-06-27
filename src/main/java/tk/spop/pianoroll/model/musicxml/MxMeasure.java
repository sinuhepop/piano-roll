package tk.spop.pianoroll.model.musicxml;

import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;

import lombok.Data;

@Data
public class MxMeasure {

	private MxAttributes attributes;

	@JacksonXmlElementWrapper(useWrapping = false)
	private List<MxNote> note;

	private Direction direction;

	public Optional<Integer> getBpm() {
		return Optional.ofNullable(direction == null ? null : direction.directionType.metronome.perMinute);
	}

	@Data
	public static class Direction {
		private DirectionType directionType;
	}

	@Data
	public static class DirectionType {
		private Metronome metronome;
	}

	@Data
	public static class Metronome {
		private int perMinute;
	}
}
