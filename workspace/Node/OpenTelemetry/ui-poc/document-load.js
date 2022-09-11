import { ConsoleSpanExporter, BatchSpanProcessor, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

const provider = new WebTracerProvider({
    resource: new Resource({[SemanticResourceAttributes.SERVICE_NAME]: 'ui-poc',})
});
const exporter = new OTLPTraceExporter({
    url: 'http://localhost:6832/v1/traces',
    headers: {}, 
});
provider.addSpanProcessor(new BatchSpanProcessor(exporter));

provider.register({
  // Changing default contextManager to use ZoneContextManager - supports asynchronous operations - optional
  contextManager: new ZoneContextManager(),
});

// Registering instrumentations
registerInstrumentations({
  instrumentations: [
    new DocumentLoadInstrumentation(),
    new XMLHttpRequestInstrumentation()
  ],
});