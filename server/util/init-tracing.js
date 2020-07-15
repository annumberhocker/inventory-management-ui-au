function initTracer (serviceName) {
    const initJaegerTracer = require('jaeger-client').initTracerFromEnv;

    // Sampler set to const 1 to capture every request, do not do this for production
    const config = {
        serviceName: serviceName
    };
    // Only for DEV the sampler will report every span
    // Other sampler types are described here: https://www.jaegertracing.io/docs/1.7/sampling/
    config.sampler = { type: 'const', param: 1 };

    return initJaegerTracer(config)
}

module.exports = initTracer;