# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AgreementType',
    'DayOfWeek',
    'DaysOfWeek',
    'EdifactCharacterSet',
    'EdifactDecimalIndicator',
    'EncryptionAlgorithm',
    'HashingAlgorithm',
    'IntegrationAccountSkuName',
    'KeyType',
    'MapType',
    'MessageFilterType',
    'ParameterType',
    'PartnerType',
    'RecurrenceFrequency',
    'SchemaType',
    'SegmentTerminatorSuffix',
    'SigningAlgorithm',
    'SkuName',
    'TrailingSeparatorPolicy',
    'UsageIndicator',
    'WorkflowState',
    'X12CharacterSet',
    'X12DateFormat',
    'X12TimeFormat',
]


class AgreementType(str, Enum):
    """
    The agreement type.
    """
    NOT_SPECIFIED = "NotSpecified"
    AS2 = "AS2"
    X12 = "X12"
    EDIFACT = "Edifact"


class DayOfWeek(str, Enum):
    """
    The day of the week.
    """
    SUNDAY = "Sunday"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"


class DaysOfWeek(str, Enum):
    SUNDAY = "Sunday"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"


class EdifactCharacterSet(str, Enum):
    """
    The EDIFACT frame setting characterSet.
    """
    NOT_SPECIFIED = "NotSpecified"
    UNOB = "UNOB"
    UNOA = "UNOA"
    UNOC = "UNOC"
    UNOD = "UNOD"
    UNOE = "UNOE"
    UNOF = "UNOF"
    UNOG = "UNOG"
    UNOH = "UNOH"
    UNOI = "UNOI"
    UNOJ = "UNOJ"
    UNOK = "UNOK"
    UNOX = "UNOX"
    UNOY = "UNOY"
    KECA = "KECA"


class EdifactDecimalIndicator(str, Enum):
    """
    The EDIFACT frame setting decimal indicator.
    """
    NOT_SPECIFIED = "NotSpecified"
    COMMA = "Comma"
    DECIMAL = "Decimal"


class EncryptionAlgorithm(str, Enum):
    """
    The encryption algorithm.
    """
    NOT_SPECIFIED = "NotSpecified"
    NONE = "None"
    DES3 = "DES3"
    RC2 = "RC2"
    AES128 = "AES128"
    AES192 = "AES192"
    AES256 = "AES256"


class HashingAlgorithm(str, Enum):
    """
    The signing or hashing algorithm.
    """
    NOT_SPECIFIED = "NotSpecified"
    NONE = "None"
    MD5 = "MD5"
    SHA1 = "SHA1"
    SHA2256 = "SHA2256"
    SHA2384 = "SHA2384"
    SHA2512 = "SHA2512"


class IntegrationAccountSkuName(str, Enum):
    """
    The sku name.
    """
    NOT_SPECIFIED = "NotSpecified"
    FREE = "Free"
    BASIC = "Basic"
    STANDARD = "Standard"


class KeyType(str, Enum):
    """
    The key type.
    """
    NOT_SPECIFIED = "NotSpecified"
    PRIMARY = "Primary"
    SECONDARY = "Secondary"


class MapType(str, Enum):
    """
    The map type.
    """
    NOT_SPECIFIED = "NotSpecified"
    XSLT = "Xslt"
    XSLT20 = "Xslt20"
    XSLT30 = "Xslt30"
    LIQUID = "Liquid"


class MessageFilterType(str, Enum):
    """
    The message filter type.
    """
    NOT_SPECIFIED = "NotSpecified"
    INCLUDE = "Include"
    EXCLUDE = "Exclude"


class ParameterType(str, Enum):
    """
    The type.
    """
    NOT_SPECIFIED = "NotSpecified"
    STRING = "String"
    SECURE_STRING = "SecureString"
    INT = "Int"
    FLOAT = "Float"
    BOOL = "Bool"
    ARRAY = "Array"
    OBJECT = "Object"
    SECURE_OBJECT = "SecureObject"


class PartnerType(str, Enum):
    """
    The partner type.
    """
    NOT_SPECIFIED = "NotSpecified"
    B2_B = "B2B"


class RecurrenceFrequency(str, Enum):
    """
    The frequency.
    """
    NOT_SPECIFIED = "NotSpecified"
    SECOND = "Second"
    MINUTE = "Minute"
    HOUR = "Hour"
    DAY = "Day"
    WEEK = "Week"
    MONTH = "Month"
    YEAR = "Year"


class SchemaType(str, Enum):
    """
    The schema type.
    """
    NOT_SPECIFIED = "NotSpecified"
    XML = "Xml"


class SegmentTerminatorSuffix(str, Enum):
    """
    The segment terminator suffix.
    """
    NOT_SPECIFIED = "NotSpecified"
    NONE = "None"
    CR = "CR"
    LF = "LF"
    CRLF = "CRLF"


class SigningAlgorithm(str, Enum):
    """
    The signing algorithm.
    """
    NOT_SPECIFIED = "NotSpecified"
    DEFAULT = "Default"
    SHA1 = "SHA1"
    SHA2256 = "SHA2256"
    SHA2384 = "SHA2384"
    SHA2512 = "SHA2512"


class SkuName(str, Enum):
    """
    The name.
    """
    NOT_SPECIFIED = "NotSpecified"
    FREE = "Free"
    SHARED = "Shared"
    BASIC = "Basic"
    STANDARD = "Standard"
    PREMIUM = "Premium"


class TrailingSeparatorPolicy(str, Enum):
    """
    The trailing separator policy.
    """
    NOT_SPECIFIED = "NotSpecified"
    NOT_ALLOWED = "NotAllowed"
    OPTIONAL = "Optional"
    MANDATORY = "Mandatory"


class UsageIndicator(str, Enum):
    """
    The usage indicator.
    """
    NOT_SPECIFIED = "NotSpecified"
    TEST = "Test"
    INFORMATION = "Information"
    PRODUCTION = "Production"


class WorkflowState(str, Enum):
    """
    The state.
    """
    NOT_SPECIFIED = "NotSpecified"
    COMPLETED = "Completed"
    ENABLED = "Enabled"
    DISABLED = "Disabled"
    DELETED = "Deleted"
    SUSPENDED = "Suspended"


class X12CharacterSet(str, Enum):
    """
    The X12 character set.
    """
    NOT_SPECIFIED = "NotSpecified"
    BASIC = "Basic"
    EXTENDED = "Extended"
    UTF8 = "UTF8"


class X12DateFormat(str, Enum):
    """
    The group header date format.
    """
    NOT_SPECIFIED = "NotSpecified"
    CCYYMMDD = "CCYYMMDD"
    YYMMDD = "YYMMDD"


class X12TimeFormat(str, Enum):
    """
    The group header time format.
    """
    NOT_SPECIFIED = "NotSpecified"
    HHMM = "HHMM"
    HHMMSS = "HHMMSS"
    HHMMS_SDD = "HHMMSSdd"
    HHMMS_SD = "HHMMSSd"