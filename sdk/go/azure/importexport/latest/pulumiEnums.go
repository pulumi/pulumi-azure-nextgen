// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The drive's current state.
type DriveState pulumi.String

const (
	DriveStateSpecified         = DriveState("Specified")
	DriveStateReceived          = DriveState("Received")
	DriveStateNeverReceived     = DriveState("NeverReceived")
	DriveStateTransferring      = DriveState("Transferring")
	DriveStateCompleted         = DriveState("Completed")
	DriveStateCompletedMoreInfo = DriveState("CompletedMoreInfo")
	DriveStateShippedBack       = DriveState("ShippedBack")
)

func (DriveState) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DriveState) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DriveState) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DriveState) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DriveState) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}