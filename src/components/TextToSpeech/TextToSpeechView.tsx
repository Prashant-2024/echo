"use client";

import React from "react";
import TextInputPanel from "./TextInputPanel";
import VoicePreviewPlaceholder from "./VoicePreviewPlaceholder";
import SettingsPanel from "./SettingsPanel";
import TextToSpeechForm, { defaultTTSValues } from "./TextToSpeechForm";

const TextToSpeechView = () => {
  return (
    <TextToSpeechForm defaultValues={defaultTTSValues}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <TextInputPanel />
          <VoicePreviewPlaceholder />
        </div>
        <SettingsPanel />
      </div>
    </TextToSpeechForm>
  );
};

export default TextToSpeechView;
