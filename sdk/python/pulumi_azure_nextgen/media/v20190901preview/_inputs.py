# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'MediaGraphAssetSinkArgs',
    'MediaGraphRtspSourceArgs',
    'MediaGraphUserCredentialsArgs',
]

@pulumi.input_type
class MediaGraphAssetSinkArgs:
    def __init__(__self__, *,
                 asset_name: pulumi.Input[str],
                 inputs: pulumi.Input[Sequence[pulumi.Input[str]]],
                 name: pulumi.Input[str],
                 odata_type: pulumi.Input[str]):
        """
        Asset sink
        :param pulumi.Input[str] asset_name: Asset name
        :param pulumi.Input[Sequence[pulumi.Input[str]]] inputs: Sink inputs
        :param pulumi.Input[str] name: Sink name
        :param pulumi.Input[str] odata_type: The discriminator for derived types.
               Expected value is '#Microsoft.Media.MediaGraphAssetSink'.
        """
        pulumi.set(__self__, "asset_name", asset_name)
        pulumi.set(__self__, "inputs", inputs)
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "odata_type", '#Microsoft.Media.MediaGraphAssetSink')

    @property
    @pulumi.getter(name="assetName")
    def asset_name(self) -> pulumi.Input[str]:
        """
        Asset name
        """
        return pulumi.get(self, "asset_name")

    @asset_name.setter
    def asset_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "asset_name", value)

    @property
    @pulumi.getter
    def inputs(self) -> pulumi.Input[Sequence[pulumi.Input[str]]]:
        """
        Sink inputs
        """
        return pulumi.get(self, "inputs")

    @inputs.setter
    def inputs(self, value: pulumi.Input[Sequence[pulumi.Input[str]]]):
        pulumi.set(self, "inputs", value)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        Sink name
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="odataType")
    def odata_type(self) -> pulumi.Input[str]:
        """
        The discriminator for derived types.
        Expected value is '#Microsoft.Media.MediaGraphAssetSink'.
        """
        return pulumi.get(self, "odata_type")

    @odata_type.setter
    def odata_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "odata_type", value)


@pulumi.input_type
class MediaGraphRtspSourceArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[str],
                 odata_type: pulumi.Input[str],
                 rtsp_url: pulumi.Input[str],
                 credentials: Optional[pulumi.Input['MediaGraphUserCredentialsArgs']] = None):
        """
        RTSP source
        :param pulumi.Input[str] name: Source name
        :param pulumi.Input[str] odata_type: The discriminator for derived types.
               Expected value is '#Microsoft.Media.MediaGraphRtspSource'.
        :param pulumi.Input[str] rtsp_url: RTSP URL
        :param pulumi.Input['MediaGraphUserCredentialsArgs'] credentials: RTSP Credentials
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "odata_type", '#Microsoft.Media.MediaGraphRtspSource')
        pulumi.set(__self__, "rtsp_url", rtsp_url)
        if credentials is not None:
            pulumi.set(__self__, "credentials", credentials)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        Source name
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="odataType")
    def odata_type(self) -> pulumi.Input[str]:
        """
        The discriminator for derived types.
        Expected value is '#Microsoft.Media.MediaGraphRtspSource'.
        """
        return pulumi.get(self, "odata_type")

    @odata_type.setter
    def odata_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "odata_type", value)

    @property
    @pulumi.getter(name="rtspUrl")
    def rtsp_url(self) -> pulumi.Input[str]:
        """
        RTSP URL
        """
        return pulumi.get(self, "rtsp_url")

    @rtsp_url.setter
    def rtsp_url(self, value: pulumi.Input[str]):
        pulumi.set(self, "rtsp_url", value)

    @property
    @pulumi.getter
    def credentials(self) -> Optional[pulumi.Input['MediaGraphUserCredentialsArgs']]:
        """
        RTSP Credentials
        """
        return pulumi.get(self, "credentials")

    @credentials.setter
    def credentials(self, value: Optional[pulumi.Input['MediaGraphUserCredentialsArgs']]):
        pulumi.set(self, "credentials", value)


@pulumi.input_type
class MediaGraphUserCredentialsArgs:
    def __init__(__self__, *,
                 password: pulumi.Input[str],
                 username: pulumi.Input[str]):
        """
        Credentials to authenticate to Media Graph sources
        :param pulumi.Input[str] password: Password credential
        :param pulumi.Input[str] username: User name
        """
        pulumi.set(__self__, "password", password)
        pulumi.set(__self__, "username", username)

    @property
    @pulumi.getter
    def password(self) -> pulumi.Input[str]:
        """
        Password credential
        """
        return pulumi.get(self, "password")

    @password.setter
    def password(self, value: pulumi.Input[str]):
        pulumi.set(self, "password", value)

    @property
    @pulumi.getter
    def username(self) -> pulumi.Input[str]:
        """
        User name
        """
        return pulumi.get(self, "username")

    @username.setter
    def username(self, value: pulumi.Input[str]):
        pulumi.set(self, "username", value)


