import { serve } from "@novu/framework/next";
import { client, feedbackEmailWorkflow } from "../../echo/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [feedbackEmailWorkflow] });
