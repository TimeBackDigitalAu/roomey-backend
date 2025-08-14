import { AGENCY, LISTER, SEEKER } from "src/lib/constant";
import z from "zod";

export const SeekerSchema = z.object({
  profilePhoto: z.instanceof(File),
  allowMarketing: z.boolean(),
  allowVerification: z.boolean(),
  role: z.literal(SEEKER),
});

export const ListerSchema = z.object({
  profilePhoto: z.instanceof(File),
  allowMarketing: z.boolean(),
  allowVerification: z.boolean(),
  propertyName: z.string(),
  role: z.literal(LISTER),
});

export const AgencySchema = z.object({
  agencyName: z.string(),
  agencyLicense: z.string(),
  allowMarketing: z.boolean(),
  allowVerification: z.boolean(),
  role: z.literal(AGENCY),
});

export const OnboardingSchema = z.discriminatedUnion("role", [
  SeekerSchema,
  ListerSchema,
  AgencySchema,
]);

export type OnboardingData = z.infer<typeof OnboardingSchema>;
