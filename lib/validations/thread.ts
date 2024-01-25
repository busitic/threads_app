import { colors } from "@clerk/themes/dist/clerk-js/src/ui/foundations/colors";
import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3).max(255, { message: 'Maximum 255 characters' }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimum 3 characters' }),
  // Add other properties as needed for comment validation
});


