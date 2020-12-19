# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'DashboardLensResponse',
    'DashboardPartsResponse',
    'DashboardPartsResponsePosition',
    'MarkdownPartMetadataResponse',
    'MarkdownPartMetadataResponseContent',
    'MarkdownPartMetadataResponseSettings',
    'ViolationResponseResult',
]

@pulumi.output_type
class DashboardLensResponse(dict):
    """
    A dashboard lens.
    """
    def __init__(__self__, *,
                 order: int,
                 parts: Sequence['outputs.DashboardPartsResponse'],
                 metadata: Optional[Mapping[str, Any]] = None):
        """
        A dashboard lens.
        :param int order: The lens order.
        :param Sequence['DashboardPartsResponseArgs'] parts: The dashboard parts.
        :param Mapping[str, Any] metadata: The dashboard len's metadata.
        """
        pulumi.set(__self__, "order", order)
        pulumi.set(__self__, "parts", parts)
        if metadata is not None:
            pulumi.set(__self__, "metadata", metadata)

    @property
    @pulumi.getter
    def order(self) -> int:
        """
        The lens order.
        """
        return pulumi.get(self, "order")

    @property
    @pulumi.getter
    def parts(self) -> Sequence['outputs.DashboardPartsResponse']:
        """
        The dashboard parts.
        """
        return pulumi.get(self, "parts")

    @property
    @pulumi.getter
    def metadata(self) -> Optional[Mapping[str, Any]]:
        """
        The dashboard len's metadata.
        """
        return pulumi.get(self, "metadata")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DashboardPartsResponse(dict):
    """
    A dashboard part.
    """
    def __init__(__self__, *,
                 position: 'outputs.DashboardPartsResponsePosition',
                 metadata: Optional['outputs.MarkdownPartMetadataResponse'] = None):
        """
        A dashboard part.
        :param 'DashboardPartsResponsePositionArgs' position: The dashboard's part position.
        :param 'MarkdownPartMetadataResponseArgs' metadata: The dashboard part's metadata.
        """
        pulumi.set(__self__, "position", position)
        if metadata is not None:
            pulumi.set(__self__, "metadata", metadata)

    @property
    @pulumi.getter
    def position(self) -> 'outputs.DashboardPartsResponsePosition':
        """
        The dashboard's part position.
        """
        return pulumi.get(self, "position")

    @property
    @pulumi.getter
    def metadata(self) -> Optional['outputs.MarkdownPartMetadataResponse']:
        """
        The dashboard part's metadata.
        """
        return pulumi.get(self, "metadata")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DashboardPartsResponsePosition(dict):
    """
    The dashboard's part position.
    """
    def __init__(__self__, *,
                 col_span: int,
                 row_span: int,
                 x: int,
                 y: int,
                 metadata: Optional[Mapping[str, Any]] = None):
        """
        The dashboard's part position.
        :param int col_span: The dashboard's part column span.
        :param int row_span: The dashboard's part row span.
        :param int x: The dashboard's part x coordinate.
        :param int y: The dashboard's part y coordinate.
        :param Mapping[str, Any] metadata: The dashboard part's metadata.
        """
        pulumi.set(__self__, "col_span", col_span)
        pulumi.set(__self__, "row_span", row_span)
        pulumi.set(__self__, "x", x)
        pulumi.set(__self__, "y", y)
        if metadata is not None:
            pulumi.set(__self__, "metadata", metadata)

    @property
    @pulumi.getter(name="colSpan")
    def col_span(self) -> int:
        """
        The dashboard's part column span.
        """
        return pulumi.get(self, "col_span")

    @property
    @pulumi.getter(name="rowSpan")
    def row_span(self) -> int:
        """
        The dashboard's part row span.
        """
        return pulumi.get(self, "row_span")

    @property
    @pulumi.getter
    def x(self) -> int:
        """
        The dashboard's part x coordinate.
        """
        return pulumi.get(self, "x")

    @property
    @pulumi.getter
    def y(self) -> int:
        """
        The dashboard's part y coordinate.
        """
        return pulumi.get(self, "y")

    @property
    @pulumi.getter
    def metadata(self) -> Optional[Mapping[str, Any]]:
        """
        The dashboard part's metadata.
        """
        return pulumi.get(self, "metadata")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class MarkdownPartMetadataResponse(dict):
    """
    Markdown part metadata.
    """
    def __init__(__self__, *,
                 type: str,
                 inputs: Optional[Sequence[Any]] = None,
                 settings: Optional['outputs.MarkdownPartMetadataResponseSettings'] = None):
        """
        Markdown part metadata.
        :param str type: The type of dashboard part.
               Expected value is 'Extension/HubsExtension/PartType/MarkdownPart'.
        :param Sequence[Any] inputs: Input to dashboard part.
        :param 'MarkdownPartMetadataResponseSettingsArgs' settings: Markdown part settings.
        """
        pulumi.set(__self__, "type", 'Extension/HubsExtension/PartType/MarkdownPart')
        if inputs is not None:
            pulumi.set(__self__, "inputs", inputs)
        if settings is not None:
            pulumi.set(__self__, "settings", settings)

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of dashboard part.
        Expected value is 'Extension/HubsExtension/PartType/MarkdownPart'.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def inputs(self) -> Optional[Sequence[Any]]:
        """
        Input to dashboard part.
        """
        return pulumi.get(self, "inputs")

    @property
    @pulumi.getter
    def settings(self) -> Optional['outputs.MarkdownPartMetadataResponseSettings']:
        """
        Markdown part settings.
        """
        return pulumi.get(self, "settings")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class MarkdownPartMetadataResponseContent(dict):
    """
    The content of markdown part.
    """
    def __init__(__self__, *,
                 settings: Optional['outputs.MarkdownPartMetadataResponseSettings'] = None):
        """
        The content of markdown part.
        :param 'MarkdownPartMetadataResponseSettingsArgs' settings: The setting of the content of markdown part.
        """
        if settings is not None:
            pulumi.set(__self__, "settings", settings)

    @property
    @pulumi.getter
    def settings(self) -> Optional['outputs.MarkdownPartMetadataResponseSettings']:
        """
        The setting of the content of markdown part.
        """
        return pulumi.get(self, "settings")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class MarkdownPartMetadataResponseSettings(dict):
    """
    Markdown part settings.
    """
    def __init__(__self__, *,
                 content: Optional['outputs.MarkdownPartMetadataResponseContent'] = None):
        """
        Markdown part settings.
        :param 'MarkdownPartMetadataResponseContentArgs' content: The content of markdown part.
        """
        if content is not None:
            pulumi.set(__self__, "content", content)

    @property
    @pulumi.getter
    def content(self) -> Optional['outputs.MarkdownPartMetadataResponseContent']:
        """
        The content of markdown part.
        """
        return pulumi.get(self, "content")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ViolationResponseResult(dict):
    """
    Violation information.
    """
    def __init__(__self__, *,
                 error_message: str,
                 id: str,
                 user_id: str):
        """
        Violation information.
        :param str error_message: Error message.
        :param str id: Id of the item that violates tenant configuration.
        :param str user_id: Id of the user who owns violated item.
        """
        pulumi.set(__self__, "error_message", error_message)
        pulumi.set(__self__, "id", id)
        pulumi.set(__self__, "user_id", user_id)

    @property
    @pulumi.getter(name="errorMessage")
    def error_message(self) -> str:
        """
        Error message.
        """
        return pulumi.get(self, "error_message")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Id of the item that violates tenant configuration.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="userId")
    def user_id(self) -> str:
        """
        Id of the user who owns violated item.
        """
        return pulumi.get(self, "user_id")


