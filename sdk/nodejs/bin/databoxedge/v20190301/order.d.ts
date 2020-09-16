import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The order details.
 */
export declare class Order extends pulumi.CustomResource {
    /**
     * Get an existing Order resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Order;
    /**
     * Returns true if the given object is an instance of Order.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Order;
    /**
     * The contact details.
     */
    readonly contactInformation: pulumi.Output<outputs.databoxedge.v20190301.ContactDetailsResponse>;
    /**
     * Current status of the order.
     */
    readonly currentStatus: pulumi.Output<outputs.databoxedge.v20190301.OrderStatusResponse | undefined>;
    /**
     * Tracking information for the package delivered to the customer whether it has an original or a replacement device.
     */
    readonly deliveryTrackingInfo: pulumi.Output<outputs.databoxedge.v20190301.TrackingInfoResponse[]>;
    /**
     * The object name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of status changes in the order.
     */
    readonly orderHistory: pulumi.Output<outputs.databoxedge.v20190301.OrderStatusResponse[]>;
    /**
     * Tracking information for the package returned from the customer whether it has an original or a replacement device.
     */
    readonly returnTrackingInfo: pulumi.Output<outputs.databoxedge.v20190301.TrackingInfoResponse[]>;
    /**
     * Serial number of the device.
     */
    readonly serialNumber: pulumi.Output<string>;
    /**
     * The shipping address.
     */
    readonly shippingAddress: pulumi.Output<outputs.databoxedge.v20190301.AddressResponse>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Order resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrderArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Order resource.
 */
export interface OrderArgs {
    /**
     * The contact details.
     */
    readonly contactInformation: pulumi.Input<inputs.databoxedge.v20190301.ContactDetails>;
    /**
     * Current status of the order.
     */
    readonly currentStatus?: pulumi.Input<inputs.databoxedge.v20190301.OrderStatus>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The shipping address.
     */
    readonly shippingAddress: pulumi.Input<inputs.databoxedge.v20190301.Address>;
}
