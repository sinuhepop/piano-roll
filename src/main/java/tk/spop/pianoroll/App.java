package tk.spop.pianoroll;

import org.springframework.boot.Banner.Mode;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration;
import org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration;
import org.springframework.boot.autoconfigure.web.DispatcherServletAutoConfiguration;
import org.springframework.boot.autoconfigure.web.EmbeddedServletContainerAutoConfiguration;
import org.springframework.boot.autoconfigure.web.ServerPropertiesAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.devtools.autoconfigure.LocalDevToolsAutoConfiguration;
import org.springframework.context.annotation.Import;

import tk.spop.pianoroll.config.WebConfig;

@ImportAutoConfiguration(classes = { //
		ServerPropertiesAutoConfiguration.class, //
		PropertyPlaceholderAutoConfiguration.class, //
		ConfigurationPropertiesAutoConfiguration.class, //
		DispatcherServletAutoConfiguration.class, //
		EmbeddedServletContainerAutoConfiguration.class, //
		LocalDevToolsAutoConfiguration.class })
@Import({ WebConfig.class })
public class App {

	public static void main(String[] args) {
		new SpringApplicationBuilder() //
				.bannerMode(Mode.CONSOLE) //
				.sources(App.class) //
				.run(args);
	}

}
