import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The Role Assignment resource format.
 */
export declare class RoleAssignment extends pulumi.CustomResource {
    /**
     * Get an existing RoleAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleAssignment;
    /**
     * Returns true if the given object is an instance of RoleAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoleAssignment;
    /**
     * The name of the metadata object.
     */
    readonly assignmentName: pulumi.Output<string>;
    /**
     * Widget types set for the assignment.
     */
    readonly conflationPolicies: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Connectors set for the assignment.
     */
    readonly connectors: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Localized description for the metadata.
     */
    readonly description: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Localized display names for the metadata.
     */
    readonly displayName: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Interactions set for the assignment.
     */
    readonly interactions: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Kpis set for the assignment.
     */
    readonly kpis: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Links set for the assignment.
     */
    readonly links: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The principals being assigned to.
     */
    readonly principals: pulumi.Output<outputs.customerinsights.v20170101.AssignmentPrincipalResponse[]>;
    /**
     * Profiles set for the assignment.
     */
    readonly profiles: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The Role assignments set for the relationship links.
     */
    readonly relationshipLinks: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * The Role assignments set for the relationships.
     */
    readonly relationships: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Type of roles.
     */
    readonly role: pulumi.Output<string>;
    /**
     * The Role assignments set for the assignment.
     */
    readonly roleAssignments: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Sas Policies set for the assignment.
     */
    readonly sasPolicies: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * The Role assignments set for the assignment.
     */
    readonly segments: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * The hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Views set for the assignment.
     */
    readonly views: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Widget types set for the assignment.
     */
    readonly widgetTypes: pulumi.Output<outputs.customerinsights.v20170101.ResourceSetDescriptionResponse | undefined>;
    /**
     * Create a RoleAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleAssignmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RoleAssignment resource.
 */
export interface RoleAssignmentArgs {
    /**
     * The assignment name
     */
    readonly assignmentName: pulumi.Input<string>;
    /**
     * Widget types set for the assignment.
     */
    readonly conflationPolicies?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * Connectors set for the assignment.
     */
    readonly connectors?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * Localized description for the metadata.
     */
    readonly description?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Localized display names for the metadata.
     */
    readonly displayName?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * Interactions set for the assignment.
     */
    readonly interactions?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * Kpis set for the assignment.
     */
    readonly kpis?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * Links set for the assignment.
     */
    readonly links?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * The principals being assigned to.
     */
    readonly principals: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170101.AssignmentPrincipal>[]>;
    /**
     * Profiles set for the assignment.
     */
    readonly profiles?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * The Role assignments set for the relationship links.
     */
    readonly relationshipLinks?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * The Role assignments set for the relationships.
     */
    readonly relationships?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Type of roles.
     */
    readonly role: pulumi.Input<string>;
    /**
     * The Role assignments set for the assignment.
     */
    readonly roleAssignments?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * Sas Policies set for the assignment.
     */
    readonly sasPolicies?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * The Role assignments set for the assignment.
     */
    readonly segments?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * Views set for the assignment.
     */
    readonly views?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
    /**
     * Widget types set for the assignment.
     */
    readonly widgetTypes?: pulumi.Input<inputs.customerinsights.v20170101.ResourceSetDescription>;
}
