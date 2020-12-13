# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'DayOfWeek',
    'HttpAuthenticationType',
    'JobActionType',
    'JobCollectionState',
    'JobScheduleDay',
    'JobState',
    'RecurrenceFrequency',
    'RetryType',
    'ServiceBusAuthenticationType',
    'ServiceBusTransportType',
    'SkuDefinition',
]


class DayOfWeek(str, Enum):
    SUNDAY = "Sunday"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"


class HttpAuthenticationType(str, Enum):
    """
    Gets or sets the HTTP authentication type.
    """
    NOT_SPECIFIED = "NotSpecified"
    CLIENT_CERTIFICATE = "ClientCertificate"
    ACTIVE_DIRECTORY_O_AUTH = "ActiveDirectoryOAuth"
    BASIC = "Basic"


class JobActionType(str, Enum):
    """
    Gets or sets the job action type.
    """
    HTTP = "Http"
    HTTPS = "Https"
    STORAGE_QUEUE = "StorageQueue"
    SERVICE_BUS_QUEUE = "ServiceBusQueue"
    SERVICE_BUS_TOPIC = "ServiceBusTopic"


class JobCollectionState(str, Enum):
    """
    Gets or sets the state.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"
    SUSPENDED = "Suspended"
    DELETED = "Deleted"


class JobScheduleDay(str, Enum):
    """
    Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
    """
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"
    SUNDAY = "Sunday"


class JobState(str, Enum):
    """
    Gets or set the job state.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"
    FAULTED = "Faulted"
    COMPLETED = "Completed"


class RecurrenceFrequency(str, Enum):
    """
    Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
    """
    MINUTE = "Minute"
    HOUR = "Hour"
    DAY = "Day"
    WEEK = "Week"
    MONTH = "Month"


class RetryType(str, Enum):
    """
    Gets or sets the retry strategy to be used.
    """
    NONE = "None"
    FIXED = "Fixed"


class ServiceBusAuthenticationType(str, Enum):
    """
    Gets or sets the authentication type.
    """
    NOT_SPECIFIED = "NotSpecified"
    SHARED_ACCESS_KEY = "SharedAccessKey"


class ServiceBusTransportType(str, Enum):
    """
    Gets or sets the transport type.
    """
    NOT_SPECIFIED = "NotSpecified"
    NET_MESSAGING = "NetMessaging"
    AMQP = "AMQP"


class SkuDefinition(str, Enum):
    """
    Gets or set the SKU.
    """
    STANDARD = "Standard"
    FREE = "Free"
    P10_PREMIUM = "P10Premium"
    P20_PREMIUM = "P20Premium"
