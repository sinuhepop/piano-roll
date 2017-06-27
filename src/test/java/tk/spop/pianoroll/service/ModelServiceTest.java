package tk.spop.pianoroll.service;

import org.junit.Assert;
import org.junit.Test;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.PropertyNamingStrategy.KebabCaseStrategy;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import lombok.val;
import lombok.extern.slf4j.Slf4j;
import tk.spop.pianoroll.service.impl.ModelServiceImpl;

@Slf4j
public class ModelServiceTest extends AbstractServiceTest {

	// @Autowired
	private ModelService service;

//	public ModelServiceTest() {
//		val bean = new XmlMapper();
//		bean.setPropertyNamingStrategy(new KebabCaseStrategy());
//		bean.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
//
//		service = new ModelServiceImpl(bean);
//	}

	@Test
	public void read() {
		val score = service.readMusicXml(super.read("xml/test.xml"));
		log.info("score: {}", score);
		Assert.assertEquals(80, (int) score.getPart().get(0).getMeasure().get(0).getBpm().get());
	}

}
