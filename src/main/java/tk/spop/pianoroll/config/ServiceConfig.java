package tk.spop.pianoroll.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.PropertyNamingStrategy.KebabCaseStrategy;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import lombok.val;
import tk.spop.pianoroll.service.impl.ModelServiceImpl;

@Configuration
@ComponentScan(basePackageClasses = ModelServiceImpl.class)
public class ServiceConfig {

	@Bean
	public XmlMapper xmlMapper() {
		val bean = new XmlMapper();
		bean.setPropertyNamingStrategy(new KebabCaseStrategy());
		bean.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		return bean;
	}

}
