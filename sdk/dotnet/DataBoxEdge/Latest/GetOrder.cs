// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBoxEdge.Latest
{
    public static class GetOrder
    {
        public static Task<GetOrderResult> InvokeAsync(GetOrderArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetOrderResult>("azure-nextgen:databoxedge/latest:getOrder", args ?? new GetOrderArgs(), options.WithVersion());
    }


    public sealed class GetOrderArgs : Pulumi.InvokeArgs
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

        public GetOrderArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetOrderResult
    {
        /// <summary>
        /// The contact details.
        /// </summary>
        public readonly Outputs.ContactDetailsResponse ContactInformation;
        /// <summary>
        /// Current status of the order.
        /// </summary>
        public readonly Outputs.OrderStatusResponse? CurrentStatus;
        /// <summary>
        /// Tracking information for the package delivered to the customer whether it has an original or a replacement device.
        /// </summary>
        public readonly ImmutableArray<Outputs.TrackingInfoResponse> DeliveryTrackingInfo;
        /// <summary>
        /// The path ID that uniquely identifies the object.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The object name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// List of status changes in the order.
        /// </summary>
        public readonly ImmutableArray<Outputs.OrderStatusResponse> OrderHistory;
        /// <summary>
        /// Tracking information for the package returned from the customer whether it has an original or a replacement device.
        /// </summary>
        public readonly ImmutableArray<Outputs.TrackingInfoResponse> ReturnTrackingInfo;
        /// <summary>
        /// Serial number of the device.
        /// </summary>
        public readonly string SerialNumber;
        /// <summary>
        /// The shipping address.
        /// </summary>
        public readonly Outputs.AddressResponse ShippingAddress;
        /// <summary>
        /// The hierarchical type of the object.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetOrderResult(
            Outputs.ContactDetailsResponse contactInformation,

            Outputs.OrderStatusResponse? currentStatus,

            ImmutableArray<Outputs.TrackingInfoResponse> deliveryTrackingInfo,

            string id,

            string name,

            ImmutableArray<Outputs.OrderStatusResponse> orderHistory,

            ImmutableArray<Outputs.TrackingInfoResponse> returnTrackingInfo,

            string serialNumber,

            Outputs.AddressResponse shippingAddress,

            string type)
        {
            ContactInformation = contactInformation;
            CurrentStatus = currentStatus;
            DeliveryTrackingInfo = deliveryTrackingInfo;
            Id = id;
            Name = name;
            OrderHistory = orderHistory;
            ReturnTrackingInfo = returnTrackingInfo;
            SerialNumber = serialNumber;
            ShippingAddress = shippingAddress;
            Type = type;
        }
    }
}
