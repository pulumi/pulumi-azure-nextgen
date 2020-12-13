// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBoxEdge.V20190701
{
    public static class GetDevice
    {
        public static Task<GetDeviceResult> InvokeAsync(GetDeviceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDeviceResult>("azure-nextgen:databoxedge/v20190701:getDevice", args ?? new GetDeviceArgs(), options.WithVersion());
    }


    public sealed class GetDeviceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The device name.
        /// </summary>
        [Input("deviceName", required: true)]
        public string DeviceName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDeviceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDeviceResult
    {
        /// <summary>
        /// Type of compute roles configured.
        /// </summary>
        public readonly ImmutableArray<string> ConfiguredRoleTypes;
        /// <summary>
        /// The Data Box Edge/Gateway device culture.
        /// </summary>
        public readonly string Culture;
        /// <summary>
        /// The status of the Data Box Edge/Gateway device.
        /// </summary>
        public readonly string? DataBoxEdgeDeviceStatus;
        /// <summary>
        /// The Description of the Data Box Edge/Gateway device.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The device software version number of the device (eg: 1.2.18105.6).
        /// </summary>
        public readonly string DeviceHcsVersion;
        /// <summary>
        /// The Data Box Edge/Gateway device local capacity in MB.
        /// </summary>
        public readonly int DeviceLocalCapacity;
        /// <summary>
        /// The Data Box Edge/Gateway device model.
        /// </summary>
        public readonly string DeviceModel;
        /// <summary>
        /// The Data Box Edge/Gateway device software version.
        /// </summary>
        public readonly string DeviceSoftwareVersion;
        /// <summary>
        /// The type of the Data Box Edge/Gateway device.
        /// </summary>
        public readonly string DeviceType;
        /// <summary>
        /// The etag for the devices.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// The Data Box Edge/Gateway device name.
        /// </summary>
        public readonly string? FriendlyName;
        /// <summary>
        /// The path ID that uniquely identifies the object.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The description of the Data Box Edge/Gateway device model.
        /// </summary>
        public readonly string? ModelDescription;
        /// <summary>
        /// The object name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The number of nodes in the cluster.
        /// </summary>
        public readonly int NodeCount;
        /// <summary>
        /// The Serial Number of Data Box Edge/Gateway device.
        /// </summary>
        public readonly string SerialNumber;
        /// <summary>
        /// The SKU type.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The Data Box Edge/Gateway device timezone.
        /// </summary>
        public readonly string TimeZone;
        /// <summary>
        /// The hierarchical type of the object.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDeviceResult(
            ImmutableArray<string> configuredRoleTypes,

            string culture,

            string? dataBoxEdgeDeviceStatus,

            string? description,

            string deviceHcsVersion,

            int deviceLocalCapacity,

            string deviceModel,

            string deviceSoftwareVersion,

            string deviceType,

            string? etag,

            string? friendlyName,

            string id,

            string location,

            string? modelDescription,

            string name,

            int nodeCount,

            string serialNumber,

            Outputs.SkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string timeZone,

            string type)
        {
            ConfiguredRoleTypes = configuredRoleTypes;
            Culture = culture;
            DataBoxEdgeDeviceStatus = dataBoxEdgeDeviceStatus;
            Description = description;
            DeviceHcsVersion = deviceHcsVersion;
            DeviceLocalCapacity = deviceLocalCapacity;
            DeviceModel = deviceModel;
            DeviceSoftwareVersion = deviceSoftwareVersion;
            DeviceType = deviceType;
            Etag = etag;
            FriendlyName = friendlyName;
            Id = id;
            Location = location;
            ModelDescription = modelDescription;
            Name = name;
            NodeCount = nodeCount;
            SerialNumber = serialNumber;
            Sku = sku;
            Tags = tags;
            TimeZone = timeZone;
            Type = type;
        }
    }
}
