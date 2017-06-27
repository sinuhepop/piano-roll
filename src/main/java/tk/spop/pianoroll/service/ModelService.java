package tk.spop.pianoroll.service;

import tk.spop.pianoroll.model.musicxml.MxScorePartwise;
import tk.spop.pianoroll.model.roll.Song;

public interface ModelService {

	MxScorePartwise readMusicXml(String xml);

	Song transform(MxScorePartwise score);

}
