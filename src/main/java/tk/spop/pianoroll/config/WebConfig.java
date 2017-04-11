package tk.spop.pianoroll.config;

import java.util.Properties;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.io.ClassPathResource;

import lombok.SneakyThrows;
import lombok.val;
import ro.isdc.wro.http.ConfigurableWroFilter;
import tk.spop.pianoroll.controller.HomeController;

@Configuration
@Import(ServiceConfig.class)
@ComponentScan(basePackageClasses = HomeController.class)
public class WebConfig {

	@Bean
	@SneakyThrows
	public FilterRegistrationBean wroFilterProxy() {

		val props = new Properties();
		props.setProperty("minimizeEnabled", "false");
		props.setProperty("resourceWatcherUpdatePeriod", "1");

		val factory = new ResourceWroManagerFactory();
		factory.setWroModelLocation(new ClassPathResource("wro.xml"));
		factory.setProperties(props);

		val filter = new ConfigurableWroFilter();
		filter.setWroManagerFactory(factory);
		filter.setProperties(props);

		val bean = new FilterRegistrationBean(filter);
		bean.addUrlPatterns("/rsc/*");
		return bean;
	}

}
