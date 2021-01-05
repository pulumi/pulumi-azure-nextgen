# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'Kind',
    'SkuName',
]


class Kind(str, Enum):
    """
    Required. Indicates the type of cognitive service account.
    """
    ACADEMIC = "Academic"
    BING_AUTOSUGGEST = "Bing.Autosuggest"
    BING_SEARCH = "Bing.Search"
    BING_SPEECH = "Bing.Speech"
    BING_SPELL_CHECK = "Bing.SpellCheck"
    COMPUTER_VISION = "ComputerVision"
    CONTENT_MODERATOR = "ContentModerator"
    EMOTION = "Emotion"
    FACE = "Face"
    LUIS = "LUIS"
    RECOMMENDATIONS = "Recommendations"
    SPEAKER_RECOGNITION = "SpeakerRecognition"
    SPEECH = "Speech"
    SPEECH_TRANSLATION = "SpeechTranslation"
    TEXT_ANALYTICS = "TextAnalytics"
    TEXT_TRANSLATION = "TextTranslation"
    WEB_LM = "WebLM"


class SkuName(str, Enum):
    """
    Gets or sets the sku name. Required for account creation, optional for update.
    """
    F0 = "F0"
    P0 = "P0"
    P1 = "P1"
    P2 = "P2"
    S0 = "S0"
    S1 = "S1"
    S2 = "S2"
    S3 = "S3"
    S4 = "S4"
    S5 = "S5"
    S6 = "S6"