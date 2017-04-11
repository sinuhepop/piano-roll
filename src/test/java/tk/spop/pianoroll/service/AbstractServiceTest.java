package tk.spop.pianoroll.service;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import lombok.SneakyThrows;
import tk.spop.pianoroll.config.ServiceConfig;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ServiceConfig.class)
public abstract class AbstractServiceTest {

	@SneakyThrows
	protected byte[] readBytes(String path) {
		return Files.readAllBytes(Paths.get("src/test/resources", path));
	}

	protected String read(String path) {
		return new String(readBytes(path), StandardCharsets.UTF_8);
	}

}
