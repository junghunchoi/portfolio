package com.backend.config;

import com.backend.utils.CacheType;
import com.github.benmanes.caffeine.cache.Caffeine;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@EnableCaching
@Configuration
public class CacheConfig {

	@Bean
	public CacheManager cacheManager() {
		List<CaffeineCache> caches = Arrays.stream(CacheType.values())
		                                   .map(cache -> new CaffeineCache(cache.getCacheName(),
				                                   Caffeine.newBuilder()
				                                           .recordStats()
				                                           .expireAfterWrite(
					                                           cache.getExpiredAfterWrite(),
					                                           TimeUnit.SECONDS)
				                                           .maximumSize(cache.getMaximumSize())
				                                           .build()
			                                   )
		                                   )
		                                   .collect(Collectors.toList());

		SimpleCacheManager simpleCacheManager = new SimpleCacheManager();
		simpleCacheManager.setCaches(caches);
		return simpleCacheManager;
	}
}