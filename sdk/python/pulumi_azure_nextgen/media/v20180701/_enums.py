# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AnalysisResolution',
    'AssetContainerPermission',
    'ContentKeyPolicyFairPlayRentalAndLeaseKeyType',
    'ContentKeyPolicyPlayReadyContentType',
    'ContentKeyPolicyPlayReadyLicenseType',
    'ContentKeyPolicyPlayReadyUnknownOutputPassingOption',
    'ContentKeyPolicyRestrictionTokenType',
    'DeinterlaceMode',
    'DeinterlaceParity',
    'EncoderNamedPreset',
    'FilterTrackPropertyCompareOperation',
    'FilterTrackPropertyType',
    'LiveEventEncodingType',
    'LiveEventInputProtocol',
    'OnErrorType',
    'Priority',
    'Rotation',
    'StorageAccountType',
    'StreamOptionsFlag',
    'StretchMode',
    'TrackPropertyCompareOperation',
    'TrackPropertyType',
]


class AnalysisResolution(str, Enum):
    """
    Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected.
    """
    SOURCE_RESOLUTION = "SourceResolution"
    STANDARD_DEFINITION = "StandardDefinition"


class AssetContainerPermission(str, Enum):
    """
    The permissions to set on the SAS URL.
    """
    READ = "Read"
    READ_WRITE = "ReadWrite"
    READ_WRITE_DELETE = "ReadWriteDelete"


class ContentKeyPolicyFairPlayRentalAndLeaseKeyType(str, Enum):
    """
    The rental and lease key type.
    """
    UNKNOWN = "Unknown"
    UNDEFINED = "Undefined"
    DUAL_EXPIRY = "DualExpiry"
    PERSISTENT_UNLIMITED = "PersistentUnlimited"
    PERSISTENT_LIMITED = "PersistentLimited"


class ContentKeyPolicyPlayReadyContentType(str, Enum):
    """
    The PlayReady content type.
    """
    UNKNOWN = "Unknown"
    UNSPECIFIED = "Unspecified"
    ULTRA_VIOLET_DOWNLOAD = "UltraVioletDownload"
    ULTRA_VIOLET_STREAMING = "UltraVioletStreaming"


class ContentKeyPolicyPlayReadyLicenseType(str, Enum):
    """
    The license type.
    """
    UNKNOWN = "Unknown"
    NON_PERSISTENT = "NonPersistent"
    PERSISTENT = "Persistent"


class ContentKeyPolicyPlayReadyUnknownOutputPassingOption(str, Enum):
    """
    Configures Unknown output handling settings of the license.
    """
    UNKNOWN = "Unknown"
    NOT_ALLOWED = "NotAllowed"
    ALLOWED = "Allowed"
    ALLOWED_WITH_VIDEO_CONSTRICTION = "AllowedWithVideoConstriction"


class ContentKeyPolicyRestrictionTokenType(str, Enum):
    """
    The type of token.
    """
    UNKNOWN = "Unknown"
    SWT = "Swt"
    JWT = "Jwt"


class DeinterlaceMode(str, Enum):
    """
    The deinterlacing mode. Defaults to AutoPixelAdaptive.
    """
    OFF = "Off"
    AUTO_PIXEL_ADAPTIVE = "AutoPixelAdaptive"


class DeinterlaceParity(str, Enum):
    """
    The field parity for de-interlacing, defaults to Auto.
    """
    AUTO = "Auto"
    TOP_FIELD_FIRST = "TopFieldFirst"
    BOTTOM_FIELD_FIRST = "BottomFieldFirst"


class EncoderNamedPreset(str, Enum):
    """
    The built-in preset to be used for encoding videos.
    """
    H264_SINGLE_BITRATE_SD = "H264SingleBitrateSD"
    H264_SINGLE_BITRATE720P = "H264SingleBitrate720p"
    H264_SINGLE_BITRATE1080P = "H264SingleBitrate1080p"
    ADAPTIVE_STREAMING = "AdaptiveStreaming"
    AAC_GOOD_QUALITY_AUDIO = "AACGoodQualityAudio"
    CONTENT_AWARE_ENCODING_EXPERIMENTAL = "ContentAwareEncodingExperimental"
    CONTENT_AWARE_ENCODING = "ContentAwareEncoding"
    H264_MULTIPLE_BITRATE1080P = "H264MultipleBitrate1080p"
    H264_MULTIPLE_BITRATE720P = "H264MultipleBitrate720p"
    H264_MULTIPLE_BITRATE_SD = "H264MultipleBitrateSD"


class FilterTrackPropertyCompareOperation(str, Enum):
    """
    The track property condition operation.
    """
    EQUAL = "Equal"
    NOT_EQUAL = "NotEqual"


class FilterTrackPropertyType(str, Enum):
    """
    The track property type.
    """
    UNKNOWN = "Unknown"
    TYPE = "Type"
    NAME = "Name"
    LANGUAGE = "Language"
    FOUR_CC = "FourCC"
    BITRATE = "Bitrate"


class LiveEventEncodingType(str, Enum):
    """
    The encoding type for Live Event.  This value is specified at creation time and cannot be updated.
    """
    NONE = "None"
    BASIC = "Basic"
    STANDARD = "Standard"
    PREMIUM1080P = "Premium1080p"


class LiveEventInputProtocol(str, Enum):
    """
    The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated.
    """
    FRAGMENTED_MP4 = "FragmentedMP4"
    RTMP = "RTMP"


class OnErrorType(str, Enum):
    """
    A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'.
    """
    STOP_PROCESSING_JOB = "StopProcessingJob"
    CONTINUE_JOB = "ContinueJob"


class Priority(str, Enum):
    """
    Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal.
    """
    LOW = "Low"
    NORMAL = "Normal"
    HIGH = "High"


class Rotation(str, Enum):
    """
    The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto
    """
    AUTO = "Auto"
    NONE = "None"
    ROTATE0 = "Rotate0"
    ROTATE90 = "Rotate90"
    ROTATE180 = "Rotate180"
    ROTATE270 = "Rotate270"


class StorageAccountType(str, Enum):
    """
    The type of the storage account.
    """
    PRIMARY = "Primary"
    SECONDARY = "Secondary"


class StreamOptionsFlag(str, Enum):
    DEFAULT = "Default"
    LOW_LATENCY = "LowLatency"


class StretchMode(str, Enum):
    """
    The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
    """
    NONE = "None"
    AUTO_SIZE = "AutoSize"
    AUTO_FIT = "AutoFit"


class TrackPropertyCompareOperation(str, Enum):
    """
    Track property condition operation
    """
    UNKNOWN = "Unknown"
    EQUAL = "Equal"


class TrackPropertyType(str, Enum):
    """
    Track property type
    """
    UNKNOWN = "Unknown"
    FOUR_CC = "FourCC"
