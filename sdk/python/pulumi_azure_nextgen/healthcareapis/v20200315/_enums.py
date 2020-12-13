# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'Kind',
    'ManagedServiceIdentityType',
]


class Kind(str, Enum):
    """
    The kind of the service.
    """
    FHIR = "fhir"
    FHIR_STU3 = "fhir-Stu3"
    FHIR_R4 = "fhir-R4"


class ManagedServiceIdentityType(str, Enum):
    """
    Type of identity being specified, currently SystemAssigned and None are allowed.
    """
    SYSTEM_ASSIGNED = "SystemAssigned"
    NONE = "None"
