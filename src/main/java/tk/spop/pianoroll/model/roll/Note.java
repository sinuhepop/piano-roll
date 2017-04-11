package tk.spop.pianoroll.model.roll;

import lombok.Data;

@Data
public class Note {

	private int id;
	private int start;
	private int duration;
	private int channel;

}
