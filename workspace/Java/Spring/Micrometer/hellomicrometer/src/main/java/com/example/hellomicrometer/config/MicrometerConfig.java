package com.example.hellomicrometer.config;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import org.springframework.boot.actuate.autoconfigure.metrics.MeterRegistryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MicrometerConfig {

    @Bean
    public MeterRegistryCustomizer<MeterRegistry> customizer() {
        return registry -> {
            createCounter(registry);
            createTimer(registry);
        };
    }

//    @Autowired
//    public MicrometerConfig(MeterRegistry registry) {
//        createCounter(registry);
//        createTimer(registry);
//    }

    private void createCounter(MeterRegistry pmr) {
        Counter counter = Counter.builder("hello.calls")
                .register(pmr);
    }

    private void createTimer(MeterRegistry pmr) {
        Timer.builder("hey.timer")
                .register(pmr);
    }
}
