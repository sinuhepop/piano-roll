package tk.spop.pianoroll.model.musicxml;

import lombok.Data;

@Data
public class MxNote {
	
	private MxPitch pitch;
	private int duration;
	private int staff;
}
