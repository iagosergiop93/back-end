const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { JaegerExporter } = require("@opentelemetry/exporter-jaeger");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");

const jaegerExporter = new JaegerExporter({
    host: "localhost",
    port: "6832"
})

const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({[SemanticResourceAttributes.SERVICE_NAME]: 'open-telemetry-poc',}),
  traceExporter: jaegerExporter,
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start()