// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201001

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
type DeploymentMode pulumi.String

const (
	DeploymentModeIncremental = DeploymentMode("Incremental")
	DeploymentModeComplete    = DeploymentMode("Complete")
)

func (DeploymentMode) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DeploymentMode) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DeploymentMode) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DeploymentMode) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DeploymentMode) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The scope to be used for evaluation of parameters, variables and functions in a nested template.
type ExpressionEvaluationOptionsScopeType pulumi.String

const (
	ExpressionEvaluationOptionsScopeTypeNotSpecified = ExpressionEvaluationOptionsScopeType("NotSpecified")
	ExpressionEvaluationOptionsScopeTypeOuter        = ExpressionEvaluationOptionsScopeType("Outer")
	ExpressionEvaluationOptionsScopeTypeInner        = ExpressionEvaluationOptionsScopeType("Inner")
)

func (ExpressionEvaluationOptionsScopeType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ExpressionEvaluationOptionsScopeType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ExpressionEvaluationOptionsScopeType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ExpressionEvaluationOptionsScopeType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ExpressionEvaluationOptionsScopeType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
type OnErrorDeploymentType pulumi.String

const (
	OnErrorDeploymentTypeLastSuccessful     = OnErrorDeploymentType("LastSuccessful")
	OnErrorDeploymentTypeSpecificDeployment = OnErrorDeploymentType("SpecificDeployment")
)

func (OnErrorDeploymentType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e OnErrorDeploymentType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e OnErrorDeploymentType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e OnErrorDeploymentType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e OnErrorDeploymentType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
