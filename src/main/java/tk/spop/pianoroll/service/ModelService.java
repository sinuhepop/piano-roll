package tk.spop.pianoroll.service;

import tk.spop.pianoroll.model.musicxml.ScorePartwise;
import tk.spop.pianoroll.model.roll.Song;

public interface ModelService {

	ScorePartwise readMusicXml(String xml);

	Song transform(ScorePartwise score);

}
