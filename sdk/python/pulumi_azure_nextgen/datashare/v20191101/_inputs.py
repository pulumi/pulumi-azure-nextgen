# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'IdentityArgs',
]

@pulumi.input_type
class IdentityArgs:
    def __init__(__self__, *,
                 type: Optional[pulumi.Input[Union[str, 'Type']]] = None):
        """
        Identity of resource
        :param pulumi.Input[Union[str, 'Type']] type: Identity Type
        """
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input[Union[str, 'Type']]]:
        """
        Identity Type
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input[Union[str, 'Type']]]):
        pulumi.set(self, "type", value)


