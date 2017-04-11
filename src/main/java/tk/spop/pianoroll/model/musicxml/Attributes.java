package tk.spop.pianoroll.model.musicxml;

import java.util.List;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;

import lombok.Data;

@Data
public class Attributes {

	private int divisions;
	private Key key;
	private Time time;
	private int staves;

	@JacksonXmlElementWrapper(useWrapping = false)
	private List<Clef> clef;
}
