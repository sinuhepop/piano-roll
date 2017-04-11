package tk.spop.pianoroll.model.roll;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class Song {

	private int bpm;
	private int quarterPerMeasure;

	private List<Channel> channels = new ArrayList<>();

	private int length;
	private int minNote;
	private int maxNote;
}
