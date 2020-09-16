import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRegistrationDefinition(args: GetRegistrationDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistrationDefinitionResult>;
export interface GetRegistrationDefinitionArgs {
    /**
     * Guid of the registration definition.
     */
    readonly registrationDefinitionId: string;
    /**
     * Scope of the resource.
     */
    readonly scope: string;
}
/**
 * Registration definition.
 */
export interface GetRegistrationDefinitionResult {
    /**
     * Name of the registration definition.
     */
    readonly name: string;
    /**
     * Plan details for the managed services.
     */
    readonly plan?: outputs.managedservices.v20190901.PlanResponse;
    /**
     * Properties of a registration definition.
     */
    readonly properties: outputs.managedservices.v20190901.RegistrationDefinitionPropertiesResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
