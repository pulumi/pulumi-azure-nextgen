import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getOrder(args: GetOrderArgs, opts?: pulumi.InvokeOptions): Promise<GetOrderResult>;
export interface GetOrderArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The order details.
 */
export interface GetOrderResult {
    /**
     * The contact details.
     */
    readonly contactInformation: outputs.databoxedge.v20190301.ContactDetailsResponse;
    /**
     * Current status of the order.
     */
    readonly currentStatus?: outputs.databoxedge.v20190301.OrderStatusResponse;
    /**
     * Tracking information for the package delivered to the customer whether it has an original or a replacement device.
     */
    readonly deliveryTrackingInfo: outputs.databoxedge.v20190301.TrackingInfoResponse[];
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * List of status changes in the order.
     */
    readonly orderHistory: outputs.databoxedge.v20190301.OrderStatusResponse[];
    /**
     * Tracking information for the package returned from the customer whether it has an original or a replacement device.
     */
    readonly returnTrackingInfo: outputs.databoxedge.v20190301.TrackingInfoResponse[];
    /**
     * Serial number of the device.
     */
    readonly serialNumber: string;
    /**
     * The shipping address.
     */
    readonly shippingAddress: outputs.databoxedge.v20190301.AddressResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
