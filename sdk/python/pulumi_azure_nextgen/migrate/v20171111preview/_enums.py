# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AssessmentStage',
    'AzureHybridUseBenefit',
    'AzureLocation',
    'AzureOfferCode',
    'AzurePricingTier',
    'AzureStorageRedundancy',
    'Currency',
    'Percentile',
    'ProvisioningState',
    'TimeRange',
]


class AssessmentStage(str, Enum):
    """
    User configurable setting that describes the status of the assessment.
    """
    IN_PROGRESS = "InProgress"
    UNDER_REVIEW = "UnderReview"
    APPROVED = "Approved"


class AzureHybridUseBenefit(str, Enum):
    """
    AHUB discount on windows virtual machines.
    """
    UNKNOWN = "Unknown"
    YES = "Yes"
    NO = "No"


class AzureLocation(str, Enum):
    """
    Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
    """
    UNKNOWN = "Unknown"
    EAST_ASIA = "EastAsia"
    SOUTHEAST_ASIA = "SoutheastAsia"
    AUSTRALIA_EAST = "AustraliaEast"
    AUSTRALIA_SOUTHEAST = "AustraliaSoutheast"
    BRAZIL_SOUTH = "BrazilSouth"
    CANADA_CENTRAL = "CanadaCentral"
    CANADA_EAST = "CanadaEast"
    WEST_EUROPE = "WestEurope"
    NORTH_EUROPE = "NorthEurope"
    CENTRAL_INDIA = "CentralIndia"
    SOUTH_INDIA = "SouthIndia"
    WEST_INDIA = "WestIndia"
    JAPAN_EAST = "JapanEast"
    JAPAN_WEST = "JapanWest"
    KOREA_CENTRAL = "KoreaCentral"
    KOREA_SOUTH = "KoreaSouth"
    UK_WEST = "UkWest"
    UK_SOUTH = "UkSouth"
    NORTH_CENTRAL_US = "NorthCentralUs"
    EAST_US = "EastUs"
    WEST_US2 = "WestUs2"
    SOUTH_CENTRAL_US = "SouthCentralUs"
    CENTRAL_US = "CentralUs"
    EAST_US2 = "EastUs2"
    WEST_US = "WestUs"
    WEST_CENTRAL_US = "WestCentralUs"


class AzureOfferCode(str, Enum):
    """
    Offer code according to which cost estimation is done.
    """
    UNKNOWN = "Unknown"
    MSAZR0003_P = "MSAZR0003P"
    MSAZR0044_P = "MSAZR0044P"
    MSAZR0059_P = "MSAZR0059P"
    MSAZR0060_P = "MSAZR0060P"
    MSAZR0062_P = "MSAZR0062P"
    MSAZR0063_P = "MSAZR0063P"
    MSAZR0064_P = "MSAZR0064P"
    MSAZR0029_P = "MSAZR0029P"
    MSAZR0022_P = "MSAZR0022P"
    MSAZR0023_P = "MSAZR0023P"
    MSAZR0148_P = "MSAZR0148P"
    MSAZR0025_P = "MSAZR0025P"
    MSAZR0036_P = "MSAZR0036P"
    MSAZR0120_P = "MSAZR0120P"
    MSAZR0121_P = "MSAZR0121P"
    MSAZR0122_P = "MSAZR0122P"
    MSAZR0123_P = "MSAZR0123P"
    MSAZR0124_P = "MSAZR0124P"
    MSAZR0125_P = "MSAZR0125P"
    MSAZR0126_P = "MSAZR0126P"
    MSAZR0127_P = "MSAZR0127P"
    MSAZR0128_P = "MSAZR0128P"
    MSAZR0129_P = "MSAZR0129P"
    MSAZR0130_P = "MSAZR0130P"
    MSAZR0111_P = "MSAZR0111P"
    MSAZR0144_P = "MSAZR0144P"
    MSAZR0149_P = "MSAZR0149P"


class AzurePricingTier(str, Enum):
    """
    Pricing tier for Size evaluation.
    """
    STANDARD = "Standard"
    BASIC = "Basic"


class AzureStorageRedundancy(str, Enum):
    """
    Storage Redundancy type offered by Azure.
    """
    UNKNOWN = "Unknown"
    LOCALLY_REDUNDANT = "LocallyRedundant"
    ZONE_REDUNDANT = "ZoneRedundant"
    GEO_REDUNDANT = "GeoRedundant"
    READ_ACCESS_GEO_REDUNDANT = "ReadAccessGeoRedundant"


class Currency(str, Enum):
    """
    Currency to report prices in.
    """
    UNKNOWN = "Unknown"
    USD = "USD"
    DKK = "DKK"
    CAD = "CAD"
    IDR = "IDR"
    JPY = "JPY"
    KRW = "KRW"
    NZD = "NZD"
    NOK = "NOK"
    RUB = "RUB"
    SAR = "SAR"
    ZAR = "ZAR"
    SEK = "SEK"
    TRY_ = "TRY"
    GBP = "GBP"
    MXN = "MXN"
    MYR = "MYR"
    INR = "INR"
    HKD = "HKD"
    BRL = "BRL"
    TWD = "TWD"
    EUR = "EUR"
    CHF = "CHF"
    ARS = "ARS"
    AUD = "AUD"


class Percentile(str, Enum):
    """
    Percentile of performance data used to recommend Azure size.
    """
    PERCENTILE50 = "Percentile50"
    PERCENTILE90 = "Percentile90"
    PERCENTILE95 = "Percentile95"
    PERCENTILE99 = "Percentile99"


class ProvisioningState(str, Enum):
    """
    Provisioning state of the project.
    """
    ACCEPTED = "Accepted"
    CREATING = "Creating"
    DELETING = "Deleting"
    FAILED = "Failed"
    MOVING = "Moving"
    SUCCEEDED = "Succeeded"


class TimeRange(str, Enum):
    """
    Time range of performance data used to recommend a size.
    """
    DAY = "Day"
    WEEK = "Week"
    MONTH = "Month"