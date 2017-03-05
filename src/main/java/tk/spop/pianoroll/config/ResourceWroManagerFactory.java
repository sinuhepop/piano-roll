package tk.spop.pianoroll.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.springframework.core.io.Resource;

import lombok.Setter;
import ro.isdc.wro.manager.factory.ConfigurableWroManagerFactory;
import ro.isdc.wro.model.factory.WroModelFactory;
import ro.isdc.wro.model.factory.XmlModelFactory;

@Setter
public class ResourceWroManagerFactory extends ConfigurableWroManagerFactory {

	private Resource wroModelLocation;
	private Properties properties;

	@Override
	protected Properties newConfigProperties() {
		return properties;
	}

	@Override
	protected WroModelFactory newModelFactory() {
		return wroModelLocation == null ? super.newModelFactory() : new XmlModelFactory() {
			@Override
			protected InputStream getModelResourceAsStream() throws IOException {
				return wroModelLocation.getInputStream();
			}
		};
	}

}
