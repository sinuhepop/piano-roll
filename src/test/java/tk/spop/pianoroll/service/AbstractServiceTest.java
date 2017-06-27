package tk.spop.pianoroll.service;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import lombok.SneakyThrows;

//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = ServiceConfig.class)
public abstract class AbstractServiceTest {

	@SneakyThrows
	protected byte[] readBytes(String path) {
		return Files.readAllBytes(Paths.get("src/test/resources", path));
	}

	protected String read(String path) {
		return new String(readBytes(path), StandardCharsets.UTF_8);
	}

}
