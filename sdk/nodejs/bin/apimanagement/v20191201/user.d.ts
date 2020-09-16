import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * User details.
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
     * Email address.
     */
    readonly email: pulumi.Output<string | undefined>;
    /**
     * First name.
     */
    readonly firstName: pulumi.Output<string | undefined>;
    /**
     * Collection of groups user is part of.
     */
    readonly groups: pulumi.Output<outputs.apimanagement.v20191201.GroupContractPropertiesResponse[]>;
    /**
     * Collection of user identities.
     */
    readonly identities: pulumi.Output<outputs.apimanagement.v20191201.UserIdentityContractResponse[] | undefined>;
    /**
     * Last name.
     */
    readonly lastName: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Optional note about a user set by the administrator.
     */
    readonly note: pulumi.Output<string | undefined>;
    /**
     * Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly registrationDate: pulumi.Output<string | undefined>;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    readonly state: pulumi.Output<string | undefined>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
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
     * Determines the type of application which send the create user request. Default is legacy portal.
     */
    readonly appType?: pulumi.Input<string>;
    /**
     * Determines the type of confirmation e-mail that will be sent to the newly created user.
     */
    readonly confirmation?: pulumi.Input<string>;
    /**
     * Email address. Must not be empty and must be unique within the service instance.
     */
    readonly email: pulumi.Input<string>;
    /**
     * First name.
     */
    readonly firstName: pulumi.Input<string>;
    /**
     * Collection of user identities.
     */
    readonly identities?: pulumi.Input<pulumi.Input<inputs.apimanagement.v20191201.UserIdentityContract>[]>;
    /**
     * Last name.
     */
    readonly lastName: pulumi.Input<string>;
    /**
     * Optional note about a user set by the administrator.
     */
    readonly note?: pulumi.Input<string>;
    /**
     * Send an Email notification to the User.
     */
    readonly notify?: pulumi.Input<boolean>;
    /**
     * User Password. If no value is provided, a default password is generated.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    readonly state?: pulumi.Input<string>;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    readonly userId: pulumi.Input<string>;
}
