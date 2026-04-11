import React from "react";

import type { Metadata } from "next";
import TextToSpeechView from "@/components/TextToSpeech/TextToSpeechView";

export const metadata: Metadata = { title: "Text to Speech" };

const TextToSpeechPage = () => {
  return <TextToSpeechView />;
};

export default TextToSpeechPage;
