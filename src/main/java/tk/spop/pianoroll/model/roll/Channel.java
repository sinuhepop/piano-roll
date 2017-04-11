package tk.spop.pianoroll.model.roll;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class Channel {

	private String name;
	private List<Note> notes = new ArrayList<>();
	private int minNote;
	private int maxNote;
}
