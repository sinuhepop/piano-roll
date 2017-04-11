package tk.spop.pianoroll.model.musicxml;

import lombok.Data;

@Data
public class Note {
	private Pitch pitch;
	private int duration;
	private int staff;
}
