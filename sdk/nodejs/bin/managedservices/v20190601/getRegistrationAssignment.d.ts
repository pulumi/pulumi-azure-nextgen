import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRegistrationAssignment(args: GetRegistrationAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistrationAssignmentResult>;
export interface GetRegistrationAssignmentArgs {
    /**
     * Tells whether to return registration definition details also along with registration assignment details.
     */
    readonly expandRegistrationDefinition?: boolean;
    /**
     * Guid of the registration assignment.
     */
    readonly registrationAssignmentId: string;
    /**
     * Scope of the resource.
     */
    readonly scope: string;
}
/**
 * Registration assignment.
 */
export interface GetRegistrationAssignmentResult {
    /**
     * Name of the registration assignment.
     */
    readonly name: string;
    /**
     * Properties of a registration assignment.
     */
    readonly properties: outputs.managedservices.v20190601.RegistrationAssignmentPropertiesResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
