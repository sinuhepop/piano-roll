package tk.spop.pianoroll.model.musicxml;

import java.util.List;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;

import lombok.Data;

@Data
public class Part {

	@JacksonXmlElementWrapper(useWrapping = false)
	private List<Measure> measure;
}
