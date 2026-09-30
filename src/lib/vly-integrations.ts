// VLY Integrations Configuration
// See /integrations.md for usage documentation

<<<<<<< HEAD
import { createVlyIntegrations } from '@vly-ai/integrations';

export const vly = createVlyIntegrations({
  deploymentToken: process.env.VLY_INTEGRATION_KEY!,
  debug: process.env.NODE_ENV === 'development'
=======
import { createVlyIntegrations } from "@vly-ai/integrations";

export const vly = createVlyIntegrations({
  deploymentToken: process.env.VLY_INTEGRATION_KEY!,
  debug: process.env.NODE_ENV === "development",
>>>>>>> f9b8045 (Update semua)
});
