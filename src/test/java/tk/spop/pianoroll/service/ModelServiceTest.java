package tk.spop.pianoroll.service;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import lombok.val;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ModelServiceTest extends AbstractServiceTest {

	@Autowired
	private ModelService service;

	@Test
	public void read() {
		val score = service.readMusicXml(super.read("xml/test.xml"));
		log.info("score: {}", score);
		Assert.assertEquals(80, (int) score.getPart().get(0).getMeasure().get(0).getBpm().get());
	}

}
