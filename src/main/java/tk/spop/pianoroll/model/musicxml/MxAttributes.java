package tk.spop.pianoroll.model.musicxml;

import java.util.List;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;

import lombok.Data;

@Data
public class MxAttributes {

	private int divisions;
	private MxKey key;
	private MxTime time;
	private int staves;

	@JacksonXmlElementWrapper(useWrapping = false)
	private List<MxClef> clef;
}
