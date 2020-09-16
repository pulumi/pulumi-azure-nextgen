import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents a user who has access to one or more shares on the Data Box Edge/Gateway device.
 */
export declare class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): User;
    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is User;
    /**
     * The password details.
     */
    readonly encryptedPassword: pulumi.Output<outputs.databoxedge.v20190801.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * The object name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of shares that the user has rights on. This field should not be specified during user creation.
     */
    readonly shareAccessRights: pulumi.Output<outputs.databoxedge.v20190801.ShareAccessRightResponse[] | undefined>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Type of the user.
     */
    readonly userType: pulumi.Output<string>;
    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The password details.
     */
    readonly encryptedPassword?: pulumi.Input<inputs.databoxedge.v20190801.AsymmetricEncryptedSecret>;
    /**
     * The user name.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * List of shares that the user has rights on. This field should not be specified during user creation.
     */
    readonly shareAccessRights?: pulumi.Input<pulumi.Input<inputs.databoxedge.v20190801.ShareAccessRight>[]>;
    /**
     * Type of the user.
     */
    readonly userType: pulumi.Input<string>;
}
