import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Information about JIT request definition.
 */
export declare class JitRequest extends pulumi.CustomResource {
    /**
     * Get an existing JitRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JitRequest;
    /**
     * Returns true if the given object is an instance of JitRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is JitRequest;
    /**
     * The parent application id.
     */
    readonly applicationResourceId: pulumi.Output<string>;
    /**
     * The client entity that created the JIT request.
     */
    readonly createdBy: pulumi.Output<outputs.solutions.v20190701.ApplicationClientDetailsResponse>;
    /**
     * The JIT authorization policies.
     */
    readonly jitAuthorizationPolicies: pulumi.Output<outputs.solutions.v20190701.JitAuthorizationPoliciesResponse[]>;
    /**
     * The JIT request state.
     */
    readonly jitRequestState: pulumi.Output<string>;
    /**
     * The JIT request properties.
     */
    readonly jitSchedulingPolicy: pulumi.Output<outputs.solutions.v20190701.JitSchedulingPolicyResponse>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The JIT request provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The publisher tenant id.
     */
    readonly publisherTenantId: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The client entity that last updated the JIT request.
     */
    readonly updatedBy: pulumi.Output<outputs.solutions.v20190701.ApplicationClientDetailsResponse>;
    /**
     * Create a JitRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JitRequestArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a JitRequest resource.
 */
export interface JitRequestArgs {
    /**
     * The parent application id.
     */
    readonly applicationResourceId: pulumi.Input<string>;
    /**
     * The JIT authorization policies.
     */
    readonly jitAuthorizationPolicies: pulumi.Input<pulumi.Input<inputs.solutions.v20190701.JitAuthorizationPolicies>[]>;
    /**
     * The name of the JIT request.
     */
    readonly jitRequestName: pulumi.Input<string>;
    /**
     * The JIT request properties.
     */
    readonly jitSchedulingPolicy: pulumi.Input<inputs.solutions.v20190701.JitSchedulingPolicy>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
