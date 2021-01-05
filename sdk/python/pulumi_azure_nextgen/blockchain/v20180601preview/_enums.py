# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'BlockchainProtocol',
]


class BlockchainProtocol(str, Enum):
    """
    Gets or sets the blockchain protocol.
    """
    NOT_SPECIFIED = "NotSpecified"
    PARITY = "Parity"
    QUORUM = "Quorum"
    CORDA = "Corda"